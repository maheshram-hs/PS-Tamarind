from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def aboutus(request):
    return render(request, 'aboutus.html')