#!/usr/bin/env bash
# Set Git user.name and user.email for this repo only (local config).
# Does not affect other repos. Run from repo root:
#   ./scripts/setup-git-user.sh
# Or manually:
#   git config --local user.name "abhaychadha"
#   git config --local user.email "abhay.chadha48@gmail.com"

set -e
cd "$(dirname "$0")/.."

git config --local user.name "abhaychadha"
git config --local user.email "abhay.chadha48@gmail.com"

echo "Local Git config set for this repo only:"
echo "  user.name  = $(git config --local user.name)"
echo "  user.email = $(git config --local user.email)"
