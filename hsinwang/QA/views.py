from rest_framework import viewsets
from .models import questions
from .serializers import QuestionsSerializer

class QuestionsViewSet(viewsets.ModelViewSet):
    queryset = questions.objects.all()
    serializer_class = QuestionsSerializer