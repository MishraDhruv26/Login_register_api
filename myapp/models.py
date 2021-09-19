from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name,address, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        email = self.normalize_email(email)
        user = self.model(email=email,name=name,address=address)

        user.set_password(password)
        user.save()
        return user


class UsersAccount(AbstractBaseUser, PermissionsMixin):
    email= models.EmailField(max_length=255, unique=True)
    name= models.CharField(max_length=255)
    address = models.CharField(max_length=1000, default="")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','address']

    def get_full_name(self):
        return self.name 
    
    def ger_short_name(self):
        return self.name

    def __str__(self):
        return self.name