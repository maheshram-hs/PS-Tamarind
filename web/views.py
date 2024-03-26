from django.shortcuts import render
from django.http import Http404
from web.models import Image

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def gallery(request):
    return render(request, 'gallery.html')

def blog(request):
    return render(request, 'blog.html')

def contact(request):
    return render(request, 'contact.html')

def image(request, image_id):
    movie = Image.objects.get(pk=image_id)
    if image is not None:
        return render(request, 'images/image.html', {'image': movie})
    else:
        raise Http404('Movie does not exist')