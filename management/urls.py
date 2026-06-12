from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register('assets', AssetViewSet)
router.register('inventory', InventoryViewSet)
router.register('assignments', AssignmentViewSet)
router.register('tickets', RepairTicketViewSet)

urlpatterns = router.urls