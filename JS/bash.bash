#!/bin/bash

files=($(ls *.js))
for ((i=0; i<${#files[@]}; i++)); do
    new_filename=$(echo "${files[i]%.*}" | sed 's/^[0-9]//g')
    extension="${files[i]##*.}"
    new_filename="$(echo "${new_filename}" | sed 's/\./_/g').${extension}"
    new_filename="$(echo "${new_filename}" | tr -d "_"  | sed 's/^[0-9]//g')"
    new_filename="$((i+1))_${new_filename}"
    if [ $i -lt 9 ];then
    mv ${files[i]} "0${new_filename}"
    else 
        mv ${files[i]} "${new_filename}"  
    fi
    echo "${files[i]} -> ${new_filename} "
done
chmod 444 *.bash
