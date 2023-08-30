FROM python:3.11.5-slim

COPY ./requirements.txt /app/requirements.txt
WORKDIR /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt


COPY . /app
EXPOSE 5000

CMD [ "python", "app.py"]