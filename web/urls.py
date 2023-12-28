from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('ours/', ours.about, name='ours'),
]