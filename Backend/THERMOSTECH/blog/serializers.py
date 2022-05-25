from rest_framework import serializers

from THERMOSTECH.home import models
from .models import Post

class Postserializers(serializers.ModelSerializer):
    model= Post
    fields = ["id","title","content","athour","slug","TimeStamp"]