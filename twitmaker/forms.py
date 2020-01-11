from django.forms import ModelForm, Textarea, CharField
from twitmaker.models import Tweet

class TweetForm(ModelForm):
    message = CharField(widget=Textarea(attrs={'placeholder': 'What did you learn today?'}))

    class Meta:
        model = Tweet
        fields = ['message']
