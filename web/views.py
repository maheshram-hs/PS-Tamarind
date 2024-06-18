from django.shortcuts import redirect, render
from django.core.mail import send_mail
from django.conf import settings
from .forms import QueryForm
from web.models import Image


def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def gallery(request):
    images = Image.objects.all().order_by('-id')
    print("Number of images:", len(images))
    context = {'images': images}
    return render(request, 'gallery.html', context)

def contact(request):
    return render(request, 'contact.html')

def enquiry(request):
    if request.method == 'POST':
        form = QueryForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            question = form.cleaned_data['question']
            
            # Send email using Django's send_mail function
            send_mail(
                'New Enquiry',
                f'Name: {name}\nEmail: {email}\nQuestion: {question}',
                settings.EMAIL_HOST_USER,  # Sender's email address from settings
                ['pstamarind@gmail.com'],  # Receiver's email address
                fail_silently=False,
            )
            return redirect('contact')  # Redirect to contact page after form submission
    else:
        form = QueryForm()
    return render(request, 'contact.html', {'form': form})