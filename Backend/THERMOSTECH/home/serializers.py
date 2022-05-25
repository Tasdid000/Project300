from rest_framework import serializers
from .models import Contact, Portfolio,Post

class ContactSerializers(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = [ "id","name", "Email", "Website" ,"Phone", "message", "Timestamp"]

class Portfolioserializers(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = ["id", "title", "content", "slug", "TimeStamp"]


class Postserializers(serializers.ModelSerializer):
    class Meta:
       model= Post
       fields = ["id","title","content","athour","slug","TimeStamp"]