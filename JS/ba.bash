#!/bin/bash
files=($(ls *.js))

for file in "${files[@]}"; do
echo "<script src=\"./JS/$file\"  defer></script>"
done