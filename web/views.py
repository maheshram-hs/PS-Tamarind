from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def ours(request):
    return render(request, 'ours.html')