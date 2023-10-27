import re

def convert_to_single_line(text):
    # Remove any style attributes
    text_without_style = re.sub(r'style="[^"]*"', '', text)
    # Remove newlines and extra spaces
    single_line = " ".join(text_without_style.split())
    # Add double quotes around the text
    return f'"{single_line}"'

# Load the chunk from the file
with open("text.txt", "r") as file:
    text_chunk = file.read()

# Convert
converted_text = convert_to_single_line(text_chunk)

# Print
print(converted_text)

# Save to newtext.txt
with open("newtext.txt", "w") as output_file:
    output_file.write(converted_text)