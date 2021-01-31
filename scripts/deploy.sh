export NETLIFY_SITE_ID=$1
export NETLIFY_AUTH_TOKEN=$2

npx netlify deploy --prod --dir=./dist/sudoku