from django import forms

class QueryForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    question = forms.CharField(widget=forms.Textarea)