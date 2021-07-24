from channels.generic.websocket import AsyncWebsocketConsumer
import json
class chat(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_group_name="testgroup"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()
    async def disconnect(self,close_code):
        print("Disconnected")
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        

    async def receive(self,text_data):
        data=json.loads(text_data)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type":"send.data",
                "data":data
            }
        )
    async def send_data(self,event):
        await self.send(json.dumps(event['data']))
        