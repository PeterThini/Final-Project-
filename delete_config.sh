#!/bin/bash

# Check if config.json file exists
if [ -f "config.json" ]; then
  # Remove the config.json file
  rm config.json
  echo "config.json has been deleted."
else
  echo "config.json does not exist in the current directory."
fi
