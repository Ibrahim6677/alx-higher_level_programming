#!/usr/bin/python3
# Check if URL argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

# Extract the URL from the argument
URL=$1

# Send a request to the URL and store the response body in a temporary file
response=$(curl -sI "$URL" | grep -i Content-Length | awk '{print $2}')

# Display the size of the body of the response in bytes
echo "$response"
