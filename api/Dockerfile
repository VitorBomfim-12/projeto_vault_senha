FROM python:3.12.3
WORKDIR vault_76/
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY . .
CMD ["flask","run","--host=0.0.0.0"]