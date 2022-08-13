import secrets
from tkinter import *
#from tkinter.ttk import *
import os
import tkinter as tk
from tkinter import ttk
from tkinter import filedialog
from tkinter.filedialog import FileDialog
from turtle import fd
from venv import create
import webbrowser
from distutils.dir_util import copy_tree
from pathlib import Path

from numpy.distutils.fcompiler import none




def reactApp():
  os.system('cd dockerized-todo-app && docker-compose down && docker-compose up --build')

def dockerManuall():
    # first we have to create the volume
    os.system('docker volume create {}'.format(createVol.get()))
    os.system('docker volume create {}'.format(createVolWordpress.get()))
    os.system('docker run -dit -e MYSQL_ROOT_PASSWORD={} -e MYSQL_USER={} -e MYSQL_PASSWORD={} -e MYSQL_DATABASE={} -v  {}:/var/lib/mysql --name {} mysql:5.7'.format(mysqlRootPassword.get(),mySQLUsername.get(),mySQLPassword.get(),mySQLDatabase.get(),createVol.get(),mysqlContainerName.get()))
    os.system('docker run -dit -e WORDPRESS_DB_HOST={} -e WORDPRESS_DB_USER={} -e WORDPRESS_DB_PASSWORD={} -e WORDPRESS_DB_NAME={} -v {}:/var/www/html --name {} -p {}:{} --link {} wordpress:5.1'.format(mysqlContainerName.get(),mySQLUsername.get(),mySQLPassword.get(),mySQLDatabase.get(),createVolWordpress.get(),wordpressContainerName.get(),int(portNumber.get()),int(portNumber2.get()),mysqlContainerName.get()))
    webbrowser.open_new_tab('192.168.1.108:8080')
    print('docker run -dit -e MYSQL_ROOT_PASSWORD={} -e MYSQL_USER={} -e MYSQL_PASSWORD={} -e MYSQL_DATABASE={} -v  {}:/var/lib/mysql --name {} mysql:5.7'.format(mysqlRootPassword.get(),mySQLUsername.get(),mySQLPassword.get(),mySQLDatabase.get(),createVol.get(),mysqlContainerName.get()))
    print('docker run -dit -e WORDPRESS_DB_HOST={} -e WORDPRESS_DB_USER={} -e WORDPRESS_DB_PASSWORD={} -e WORDPRESS_DB_NAME={} -v {}:/var/www/html --name {} -p {}:{}  --link {} wordpress:5.1'.format(mysqlContainerName.get(),mySQLUsername.get(),mySQLPassword.get(),mySQLDatabase.get(),createVolWordpress.get(),wordpressContainerName.get(),int(portNumber.get()),int(portNumber2.get()),mysqlContainerName.get()))

def dockerCompose():
    os.system('docker-compose up -d')
    webbrowser.open_new_tab('http://localhost:8080') or webbrowser.open_new('http://localhost:8080')

def browse_button(screen1):
    screen1.directory = filedialog.askdirectory()

def createReactDockerFile(appName, portNo, dir):
    # print (dir)
    Path("my-app").mkdir(parents=True, exist_ok=True)
    copy_tree(dir, "my-app")
    os.chdir('my-app')

    with open("Dockerfile",'w',encoding = 'utf-8') as f:
        f.write('FROM node:18-alpine3.15\n')
        f.write('WORKDIR /app\n')
        f.write('ENV PATH /app/node_modules/.bin:$PATH\n')
        f.write('COPY . .\n')
        f.write('RUN npm install\n')
        f.write('RUN npm install react-scripts@5.0.1 -g\n')
        f.write('EXPOSE {}/tcp\n'.format(portNo))
        f.write('CMD ["npm", "start"]')

    os.system('docker build -t {}:latest .'.format(appName))

    os.system('docker run -d {}:latest'.format(appName))


if __name__ == '__main__':
    screen1 = Tk()
    screen1.title("Automated Dockerization")
    screen1.geometry('1520x950')
    screen1.resizable(False, False)
    screen1.bind('<Escape>',lambda e: screen1.destroy())
    Label(screen1,text="Automated Dockerization",font=('bold',20)).grid(column = 4,row=1)

    Label(screen1,text="Select Directory",background='red',foreground='white',font=('Arial',15)).grid(column = 3, row = 2, padx=12, pady=15)


    #--------------directory-----------------

    
    
   # screen1 = Tk()
    v = StringVar()
    

    #--------------directory-----------------

    #----------------React.js----------------

    Label(screen1,text="ReactJS",background='blue',foreground='white',font=('Arial',20)).grid(column = 2, row = 3, padx=12, pady=10)

    Label(screen1, text="Enter Project Name : ",font=('Arial',15)).grid(column=3, row=3)


    myReactProjectName = Entry(screen1,width=30,font=('Arial',15) )
    myReactProjectName.insert(0, 'ReactJS Project Name')
    myReactProjectName.grid(column=4, row=3, padx=10, pady=10,ipady=5)


    Label(screen1, text="Port Number : ",font=('Arial',15)).grid(column=3, row=4)

    portNumberReact = Entry(screen1, width=27,font=('Arial',15))
    portNumberReact.insert(0, 'Ex. 8080')
    portNumberReact.grid(column=4, row=4, padx=12, pady=10,ipady=5)

    button2 = Button(text="Browse",font=('Arial',15),fg="green", bg="white" , command=lambda : browse_button(screen1)).grid(row=2, column=4)

   
    

    Button(screen1,
            text="Start React app", 
            command=lambda : createReactDockerFile(myReactProjectName.get(), portNumberReact.get(), screen1.directory),
            fg="green",
            bg="white",
            font=('Arial',15)).grid(column=5, row=4,ipady=5)

     #--------------------ReactJS------------------
    separator = ttk.Separator(screen1, orient='horizontal')
    separator.place(relx=0, rely=0.22, relwidth=1, relheight=1)
 

    #---------------------Wordpress----------------
    Label(screen1,text="WordPress",background='orange',foreground='white',font=('Arial',20)).grid(column = 2, row = 6, padx=12, pady=10)

    # create volume for Wordpress

    Label(screen1, text="Enter Volume name for wordpress : ",font=('Arial',15)).grid(column=3, row=6)

    createVolWordpress = Entry(screen1, width=27,font=('Arial',15))
    createVolWordpress.insert(0, 'Enter Vol name for wordpress')
    createVolWordpress.grid(column=4, row=6, padx=10, pady=10,ipady=5)

    # create volume for mysql
    Label(screen1,text="Enter Volume name for MYSQL : ",font=('Arial',15)).grid(column = 3,row=7)

    createVol = Entry(screen1,width=27,font=('Arial',15))
    createVol.insert(0,'Enter Vol name for mysql')
    createVol.grid(column = 4,row=7,padx=10,pady=10,ipady=5)

    #Database Container name
    Label(screen1, text="Enter Database Container name (It will be your host name) : ",font=('Arial',15)).grid(column=3, row=8)

    mysqlContainerName = Entry(screen1, width=27,font=('Arial',15))
    mysqlContainerName.insert(0, 'Ex. dbos')
    mysqlContainerName.grid(column=4, row=8, padx=10, pady=10,ipady=5)

    # MySQL root password
    Label(screen1, text="Mysql root password (MYSQL_ROOT_PASSWORD) : ",font=('Arial',15)).grid(column=3, row=9)

    mysqlRootPassword = Entry(screen1, width=27,font=('Arial',15))
    mysqlRootPassword.insert(0, 'Ex. mydbos')
    mysqlRootPassword.grid(column=4, row=9, padx=10, pady=10, ipady=5)

    # MySQL_USERNAME
    Label(screen1, text="Enter username (MYSQL_USERNAME) : ",font=('Arial',15)).grid(column=3, row=10)

    mySQLUsername = Entry(screen1, width=27,font=('Arial',15))
    mySQLUsername.insert(0, 'Ex. username')
    mySQLUsername.grid(column=4, row=10, padx=10, pady=10,ipady=5)

    # MySQL_PASSWORD
    Label(screen1, text="Enter password (MYSQL_PASSWORD) : ",font=('Arial',15)).grid(column=3, row=11)

    mySQLPassword = Entry(screen1, width=27,font=('Arial',15))
    mySQLPassword.insert(0, 'Ex. password@1998')
    mySQLPassword.grid(column=4, row=11, padx=10, pady=10,ipady=5)

    # MySQL_DATABASE_NAME
    Label(screen1, text="Enter Database name (MYSQL_DATABASE_NAME) : ",font=('Arial',15)).grid(column=3, row=12)

    mySQLDatabase = Entry(screen1,width=30,font=('Arial',15) )
    mySQLDatabase.insert(0, 'Ex. myDB')
    mySQLDatabase.grid(column=4, row=12, padx=10, pady=10,ipady=5)

    # Wordpress Container name
    Label(screen1, text="Enter Wordpress Container Name : ",font=('Arial',15)).grid(column=3, row=13)

    wordpressContainerName = Entry(screen1, width=27,font=('Arial',15))
    wordpressContainerName.insert(0, 'Ex. myWebsite01')
    wordpressContainerName.grid(column=4, row=13, padx=12, pady=10,ipady=5)

    # Port Number
    Label(screen1, text="Port Number : ",font=('Arial',15)).grid(column=3, row=14)

    portNumber = Entry(screen1, width=27,font=('Arial',15))
    portNumber.insert(0, 'Ex. 8080')
    portNumber.grid(column=4, row=14, padx=12, pady=10,ipady=5)

   # Label(screen1, text=":",font=('Arial',15)).grid(column = 5, row = 14)

    portNumber2 = Entry(screen1, width=27,font=('Arial',15))
    portNumber2.insert(0, 'Ex. 80')
    portNumber2.grid(column=5, row=14, padx=1, pady=10,ipady=5)


    Button(screen1, text="Manual Start WordPress", command=dockerManuall, fg="green", bg="white",font=('Arial',15)).grid(column=3, row=16,ipady=5)

    # One CLick auto configure

    #Label(screen1,text="One click and Auto Configure using docker compose file",background='green',foreground='white',font=('Arial',15)).grid(column = 3, row = 17, padx=12, pady=10)

    btn1 = Button(screen1, text="Auto Start WordPress", command=dockerCompose, fg="green", bg="white",font=('Arial',15))
    btn1.grid(column=4, row=16,padx=15,pady=10,ipady=5)



    # # datatype of menu text
    # clicked = StringVar()

    # # initial menu text
    # clicked.set( "Select language" )


   
    #---------------------Wordpress----------------

    separator = ttk.Separator(screen1, orient='horizontal')
    separator.place(relx=0, rely=0.84, relwidth=1, relheight=1)

    #--------------Express.js--------------------
    Label(screen1,text="ExpressJS",background='red',foreground='white',font=('Arial',20)).grid(column = 2, row = 17, padx=12, pady=10)

    Label(screen1, text="Enter Project Name : ",font=('Arial',15)).grid(column=3, row=17)

    myExpressProjectName = Entry(screen1,width=30,font=('Arial',15) )
    myExpressProjectName.insert(0, 'Ex. myDB')
    myExpressProjectName.grid(column=4, row=17, padx=10, pady=10,ipady=5)


    Label(screen1, text="Port Number : ",font=('Arial',15)).grid(column=3, row=18)

    portNumberEX = Entry(screen1, width=27,font=('Arial',15))
    portNumberEX.insert(0, 'Ex. 8080')
    portNumberEX.grid(column=4, row=18, padx=12, pady=10,ipady=5)


    #--------------Express.js--------------------



    screen1.mainloop()




