#!/usr/bin/env bash
# Simple deploy script to push root to gh-pages branch (overwrites gh-pages)
set -e

# Commit and push main
git add -A
git commit -m "Deploy: $(date --iso-8601=seconds)" || true
git push origin main

# Push root to gh-pages branch using subtree (requires git >= 1.7.11)
git subtree split --prefix . -b gh-pages-deploy
git push -f origin gh-pages-deploy:gh-pages
# cleanup
git branch -D gh-pages-deploy

echo "Deployed to gh-pages branch. Configure GitHub Pages to serve from gh-pages branch or main branch settings."
