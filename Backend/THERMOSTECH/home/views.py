from .models import Contact, Portfolio, Post
from .serializers import ContactSerializers, Portfolioserializers, Postserializers

# from rest_framework.views import APIView
from rest_framework import generics, parsers
# from rest_framework.response import Response

# class ContactAPIView(APIView):
#     def get(self, request, format=None):
#         contact_list = Contact.objects.all()
#         contact_serializers = ContactSerializers(contact_list, many=True)
#         return Response(contact_serializers.data)

class ContactListAPIView(generics.ListAPIView):
    queryset=Contact.objects.all()
    serializer_class = ContactSerializers
    parser_classes = [parsers.FormParser, parsers.MultiPartParser]

class PortfolioListAPIView(generics.ListAPIView):
    queryset= Portfolio.objects.all()
    serializer_class= Portfolioserializers


class PostListAPIView(generics.ListAPIView):
    queryset= Post.objects.all()
    serializer_class= Postserializers