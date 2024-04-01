from django.shortcuts import render
from web.models import Image


def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def gallery(request):
    images = Image.objects.all()
    print("Number of images:", len(images))
    context = {'images': images}
    return render(request, 'gallery.html', context)

# Blog Page (If required)
"""
def blog(request):
    return render(request, 'blog.html')
"""

def contact(request):
    return render(request, 'contact.html')