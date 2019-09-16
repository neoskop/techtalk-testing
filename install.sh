#!/bin/bash

REPOSITORY="https://github.com/neoskop/techtalk-testing"

if [[ ! `which yarn` ]]; then
    echo "Yarn not found"
    exit
fi

if [[ ! `which git` ]]; then
    echo "git not found"
    exit
fi

git clone $REPOSITORY tt-testing
cd tt-testing
yarn

