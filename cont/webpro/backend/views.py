from django.views.generic import View
from django.shortcuts import render
from rest_framework import viewsets
from backend.models import User
from backend.serializing import user_serilizer
import json
from django.db.models import Q
from backend.utils import Utils
from django.contrib.auth import authenticate,login
# Create your views here.
class users_view(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=user_serilizer

# class login(View,Utils):
#     def post(self,request,*args,**kwargs):
#         raw_data=request.body
#         valide=self.json_validater(raw_data)
#         if not valide:
#             msg={"msg":"data is not valide"}
#             return self.http_response(data=msg,status_code=400)
#         load_data=json.loads(raw_data)
#         user= authenticate(request,username=load_data["username"],password=load_data["password"])
#         print("user",user)
#         if user is not None:
#             login(request,user)
#             print("ok")
#         get_password_encryption=load_data["password"]
#         print(load_data["username"],load_data["password"],get_password_encryption)
#         get_details=User.objects.get(Q(username__exact=load_data["username"]) & Q(email_exact="babu@gmail.com"))
#         print(get_details)
#         proper_format=self.serializing([get_details,])
#         return self.http_response(data=proper_format,status_code=200)

class Login(View):
        def post(self,request):
            load=json.loads(request.body)
            username = load['username']
            password = load['password']
            user = authenticate(request, username=username)
            print(user)
            if user is not None:
                login(request,user)
                # Redirect to a success page.
                print("okkkkkkkk")
            else:
                print("notokkk")
