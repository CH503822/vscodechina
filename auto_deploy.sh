#!/bin/bash
# 目录下执行下列语句，后台启动 shell，日志输出到 auto_deploy.log
# nohup ./auto_deploy.sh > auto_deploy.log 2>&1 &
# ps auxf | grep 'auto_deploy' 查看后台运行的脚步的 id，
# kill id 杀死脚本

while true
do
  git remote update
	LOCAL=$(git rev-parse @)
	REMOTE=$(git rev-parse "origin/master")
	if [ $LOCAL = $REMOTE ];then
	  echo "up-to-date"
	else
	  git checkout master
# 拉取代码服务器编译	  git pull && npm install && npm run build
# 本地编译自动拉取代码
	  git pull 
	fi	
  sleep 30 #每 30 秒循环一次
done

