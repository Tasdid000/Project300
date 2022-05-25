from django.urls import path
from .views import ContactListAPIView, PortfolioListAPIView, PostListAPIView
urlpatterns = [
    path('home/', ContactListAPIView.as_view()),
    path('Portfolio/', PortfolioListAPIView.as_view()),#http://127.0.0.1:8000/apiv1/Portfolio/
    path('post/', PostListAPIView.as_view()),
]
