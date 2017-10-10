#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>

const char* ssid = "your-wifi-ssid";
const char* password = "your-wifi-pass";

ESP8266WebServer server ( 80 );

const int led1 = D5;
const int led2 = D7;

void setup ( void ) {
	pinMode ( led1, OUTPUT );
	pinMode ( led2, OUTPUT );
	
	Serial.begin(115200);
	Serial.println("Booting");
	WiFi.mode(WIFI_STA);
	WiFi.begin(ssid, password);
	while (WiFi.waitForConnectResult() != WL_CONNECTED) {
		Serial.println("Connection Failed! Rebooting...");
		delay(500);
		ESP.restart();
	}

	ArduinoOTA.onStart([]() {
		Serial.println("Start");
	});
	ArduinoOTA.onEnd([]() {
		Serial.println("\nEnd");
	});
	ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
		Serial.printf("Progress: %u%%\r", (progress / (total / 100)));
	});
	ArduinoOTA.onError([](ota_error_t error) {
		Serial.printf("Error[%u]: ", error);
		if (error == OTA_AUTH_ERROR) Serial.println("Auth Failed");
		else if (error == OTA_BEGIN_ERROR) Serial.println("Begin Failed");
		else if (error == OTA_CONNECT_ERROR) Serial.println("Connect Failed");
		else if (error == OTA_RECEIVE_ERROR) Serial.println("Receive Failed");
		else if (error == OTA_END_ERROR) Serial.println("End Failed");
	});
	ArduinoOTA.begin();
	Serial.println("Ready");

	Serial.println ( "" );
	Serial.print ( "Connected to " );
	Serial.println ( ssid );
	Serial.print ( "IP address: " );
	Serial.println ( WiFi.localIP() );

	if ( MDNS.begin ( "esp8266" ) ) {
		Serial.println ( "MDNS responder started" );
	}

	server.on ( "/", handleRoot );
	server.onNotFound ( handleNotFound );
	server.on ( "/led1on", led1on );
	server.on ( "/led1off", led1off );
	server.on ( "/led2on", led2on );
	server.on ( "/led2off", led2off );
	server.begin();
	Serial.println ( "HTTP server started" );
}

void loop ( void ) {
	ArduinoOTA.handle();

	server.handleClient();
}

void led1on(){
	digitalWrite(led1, HIGH);

	server.send ( 200, "text/json", "{\"ok\": \"led1on\"}" );
}

void led1off(){
	digitalWrite(led1, LOW);

	server.send ( 200, "text/json", "{\"ok\": \"led1off\"}" );
}

void led2on(){
	digitalWrite(led2, HIGH);

	server.send ( 200, "text/json", "{\"ok\": \"led2on\"}" );
}

void led2off(){
	digitalWrite(led2, LOW);

	server.send ( 200, "text/json", "{\"ok\": \"led2off\"}"  );
}

void handleRoot() {
	server.send ( 200, "text/json", "{\"Led 1 on\": \"url/led1on\"}" );
}

void handleNotFound() {
	String message = "File Not Found\n\n";
	message += "URI: ";
	message += server.uri();
	message += "\nMethod: ";
	message += ( server.method() == HTTP_GET ) ? "GET" : "POST";
	message += "\nArguments: ";
	message += server.args();
	message += "\n";

	for ( uint8_t i = 0; i < server.args(); i++ ) {
		message += " " + server.argName ( i ) + ": " + server.arg ( i ) + "\n";
	}

	server.send ( 404, "text/plain", message );
}
