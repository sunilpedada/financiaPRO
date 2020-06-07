from django.conf.urls import url,include
from rest_framework import routers
from backend.views import users_view,Login
router=routers.DefaultRouter()
router.register('user',users_view)
urlpatterns=[
    url(r"",include(router.urls)),
    # url(r"^login/$",Login.as_view()),
    url(r'^auth/', include('rest_auth.urls'))
]