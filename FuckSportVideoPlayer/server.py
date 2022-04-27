from flask import Flask, Response, request
import os

VIDEO_FILE = 'video2.mp4'
app = Flask(__name__)


@app.route('/')
def index():
    return open('index.html', 'r', encoding='utf-8').read()


@app.route('/<string:anything>')
def get_file(anything):

    if 'video' in anything:
        filename = VIDEO_FILE
        fileSize = os.path.getsize(filename)
        f = open(filename, 'rb')
        f.seek(request.range.ranges[0][0])
        headers = {
            'Accept-Range': 'bytes',
            'Content-Length': fileSize,
            'Content-Range': request.range.to_content_range_header(fileSize)
        }
        return Response(f, 206, headers, content_type='video/mp4')

    else:
        if os.path.exists(anything):
            return open(anything, 'r', encoding='utf-8').read()
        else:
            return 'Resource not found!'


if __name__ == '__main__':
    print('IP info')
    os.system('ipconfig /all |findstr "v4"')
    print()
    app.run(debug=False, host='0.0.0.0', port='5001')
