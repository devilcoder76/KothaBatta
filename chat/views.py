from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'chat/index.html')

def roomchat(request,username):
    return render(request,"chat/main.html",{'username':username})  