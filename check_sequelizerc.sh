
# Check if .sequelizerc file exists in the current directory
if [ -f ".sequelizerc" ]; then
  echo ".sequelizerc file exists in the current directory."
else
  echo ".sequelizerc file does not exist in the current directory."
fi
