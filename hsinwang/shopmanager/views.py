from django.http import JsonResponse
from .models import User

def user_list(request):
    users = User.objects.all()
    user_data = [{'name': user.name, 'email': user.email} for user in users]
    return JsonResponse(user_data, safe=False)