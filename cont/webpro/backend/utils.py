import json
from django.core.serializers import serialize
from django.http import HttpResponse
class Utils(object):
    def json_validater(self,data):
        try:
            loads=json.loads(data)
            valide=True
        except ValueError:
            valide=False
        return valide
    def serializing(self,data):
        details=[]
        serialized_data=serialize("json",data,fields=("username","email"))
        for element in serialized_data:
            details.append(element["fields"])
            details.append({"id":element["pk"]})
        return details
    def http_response(self,data,status_code):
        dump=json.dumps(data)
        return HttpResponse(dump,content_type="application/json",status=status_code)