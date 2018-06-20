# wui-baseline
Generic Web UI Baseline driven by webservices

Introduction
Most web applications are formed by various common components.
From layout perspectives, majority of the web applications consist of components such as header (usually with company logo,
application logo/name), menu, search panel, content/search result panels, footer.
From function/module perspectives, the common components are the access control, privileges management.

However, these components were re-invented over and over through out the software development life cycle.
This is not efficient as enormous efforts spent on development that are not related to the actual requirement.

This project is to build a web UI baseline that come with the common components.
The web UI layout and behavior is driven by configuration (in JSON) via webservice.
The developer just need to setup this once at the back-end tables and then focus on the requirements.

========= This project will be change to use webpack, the following command will be update once modified to webpack =====
Prerequisites 
- Java 1.8 or higher
- Maven 3.1 or higher
To run the project, type "mvn jetty:run"
