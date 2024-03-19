#include <Arduino.h>
#include <WiFi.h>
#include <WebSocketsClient.h>

const char* ssid = "iPhone";
const char* password = "kosonggg";
const char* serverAddress = "192.168.100.17";
const int serverPort = 3002;
const int led1 = 2;
const int led2 = 4;
const int led3 = 18;
const int led4 = 19;

WiFiClient wifiClient;
WebSocketsClient webSocket;

void onWebSocketEvent(WStype_t type, uint8_t *payload, size_t length) {
  switch (type) {
    case WStype_DISCONNECTED:
      Serial.println("Terputus dari server");
      webSocket.begin(serverAddress, serverPort);
      Serial.println("Terhubung ke server WebSocket");
      Serial.println(WiFi.localIP());
      break;
    case WStype_TEXT:
      Serial.print("Menerima pesan: ");
      Serial.println((char*)payload);

      if (strcmp((char*)payload, "1") == 0) {
        digitalWrite(led1, HIGH); 
      } else if (strcmp((char*)payload, "2") == 0) {
        digitalWrite(led1, LOW);
      }
      if (strcmp((char*)payload, "3") == 0) {
        digitalWrite(led2, HIGH); 
      } else if (strcmp((char*)payload, "4") == 0) {
        digitalWrite(led2, LOW); 
      }
      if (strcmp((char*)payload, "5") == 0) {
        digitalWrite(led3, HIGH); 
      } else if (strcmp((char*)payload, "6") == 0) {
        digitalWrite(led3, LOW); 
      }
      if (strcmp((char*)payload, "7") == 0) {
        digitalWrite(led4, HIGH); 
      } else if (strcmp((char*)payload, "8") == 0) {
        digitalWrite(led4, LOW); 
      }
      break;
  }
}

void setup() {
  Serial.begin(115200);
  delay(10);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi Connected");

  webSocket.begin(serverAddress, serverPort);
  webSocket.onEvent(onWebSocketEvent);

  Serial.println("Terhubung ke server WebSocket");
  
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
}

void loop() {
  webSocket.loop();
}
