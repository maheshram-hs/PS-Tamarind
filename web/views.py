from django.shortcuts import redirect, render
from django.core.mail import send_mail
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
            
            # Send email
            send_mail(
                'New Enquiry',
                f'Name: {name}\nEmail: {email}\nQuestion: {question}',
                'from@example.com',  # Sender's email address
                ['to@example.com'],  # Receiver's email address
                fail_silently=False,
            )
            return redirect('contact')  # Redirect to contact page after form submission
    else:
        form = QueryForm()
    return render(request, 'contact.html', {'form': form})