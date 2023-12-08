#!/bin/bash

file_path="./dist/trackasia-gl-directions.js"

if [ -f "$file_path" ]; then
  # Use sed to delete lines 6098, 6099, and 6100 from the file
  sed '6098,6100d' "$file_path" > temp_file

  # Overwrite the original file with the modified content
  mv temp_file "$file_path"

  # Remove the temporary file
  rm temp_file

  echo "Deleted lines 6098, 6099, and 6100 from the file successfully."
else
  echo "File not found: $file_path"
fi