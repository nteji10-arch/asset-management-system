from rest_framework import viewsets
from .models import *
from .serializers import *

class AssetViewSet(viewsets.ModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer


class InventoryViewSet(viewsets.ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventorySerializer


class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer


class RepairTicketViewSet(viewsets.ModelViewSet):
    queryset = RepairTicket.objects.all()
    serializer_class = RepairTicketSerializer