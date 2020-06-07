from rest_framework import serializers
from backend.models import User,custom_user
class custom_serializer(serializers.ModelSerializer):
    class Meta:
        model=custom_user
        fields=("user_type","phone_number","address")
class user_serilizer(serializers.ModelSerializer):
    additional=custom_serializer(required=True)
    class Meta:
        model=User
        fields=("username","email","password","first_name","last_name","additional")
        extra_kwargs={"password":{"write_only":True}}
    def create(self,validated_data):
        add=validated_data.pop("additional")
        password=validated_data.pop("password")
        user=User(**validated_data)
        user.set_password(password)
        user.save()
        custom_user.objects.create(User=user,**add)
        return user
    def update(self,instance,validated_data):
        add=validated_data.pop("additional")
        custom_data=instance.additional
        # p=validated_data.pop("password")
        # u = User.objects.get(email__exact=instance.email)
        # u.set_password(p)
        # print(u)
        instance.username=validated_data.get("username",instance.username)
        instance.email=validated_data.get("email",instance.email)
        instance.first_name=validated_data.get("first_name",instance.first_name)
        instance.last_name=validated_data.get("last_name",instance.last_name)
        instance.save()
        custom_data.user_type=add.get("user_type",custom_data.user_type)
        custom_data.phone_number=add.get("phone_number",custom_data.phone_number)
        custom_data.address=add.get("address",custom_data.address)
        custom_data.save()
        return instance
