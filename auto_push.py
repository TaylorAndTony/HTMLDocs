import os
import datetime


def green_print(text, **kwargs):
    print(f'\033[32m{text}\033[0m', **kwargs)


def yellow_print(text, **kwargs):
    print(f'\033[33m{text}\033[0m', **kwargs)


def red_print(text, **kwargs):
    print(f'\033[31m{text}\033[0m', **kwargs)


def code_print(code, text, **kwargs):
    """ 
    31:red 32:green 33:yellow 34:blue 35:purple 36:cyan 37:white
    1:bold 4:underline 7:reverse 9:delete
    """
    print(f'\033[{code}m{text}\033[0m', **kwargs)


def give_me_date(offset=0, detail=False) -> str:
    """
    返回指定的时间
    :param offset: 相对于今天偏移几天
    :param detail: 是否返回精确到时分秒的时间
    :return: YY-mm-dd
    """
    today = datetime.datetime.now()
    offset = datetime.timedelta(days=offset)
    if not detail:
        re_date = (today + offset).strftime('%Y-%m-%d')
    else:
        re_date = (today + offset).strftime('%Y-%m-%d--%H-%M-%S')
    return re_date


green_print('Adding files...')
os.system('git add .')
cmt = input('输入本次提交的描述 (可选)：')
if not cmt:
    cmt = give_me_date(detail=True)
os.system('git commit -m "%s"' % cmt)
green_print('Pushing files...')
os.system('git push origin main')
input('按回车键退出')
