import http.server
import socketserver
import os

os.chdir(r'D:\wamp64\www\familyboat\github\familyboat\qixi')

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
