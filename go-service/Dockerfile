FROM golang:1.20-alpine

WORKDIR /app
COPY go.mod ./

RUN go mod tidy

COPY . .

EXPOSE 8081

CMD ["go", "run", "main.go"]