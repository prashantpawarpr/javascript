<h1 style="align:center">DOCUMENT OBJECT MODEL</h1>

<pre>
<h3>
Accessing window document 
  </h3>
    <ul>
      <li>window.document.body</li>:to access the body element , now it is so common that window we can access "document.body". 
      <li>document.getElementById("id")</li>
      <li>document.getElementByClassName("className")</li> it return the HTMLCollection.which can be converted to array using Array.from() method
      <li>document.getElementByTagName("tagname")</li>similar like className
      <li>document.querySelector("selector")</li>:selector can be "tagname" , "classname"(should be sepecified .) and "id"(should be specified #)
      <li>document.querySelectorAll("selector")</li>:selector can be "tagname" , "classname"(should be sepecified .) and "id"(should be specified #)
      it will give nodelist, To access the node list we have property called forEach to update file we have to use forEach method
  </ul>

  <h3> getAttribute Method </h3>
      this method give attribute that we want to target 
      e.g selector.getAttribute("id/className,/style"); will give specified property of the tag
  <h3> setAttribute Method </h3>
      this method is used to set attribute to the target element
      e.g selector.setAttribute("property","value");
      selector is targeted element 
      property is like classname ,style ,id etc
      value will be the value that we want to set of specific property

  <h3> Another way canging style of attribute</h3>
      selector.property.property= "value";
      where 
          property is like border,color,background-color;
          value is specifie value accordingly
  <h3>Method of manipulating the content of web</h3>
      <ul>
          <li>TextContent</li>
          <li>InnerText</li>
          <li>innerHTML</li>
  </ul>
      all three method is used to change the content of the element 
      Difference:-

        innerHTML give all the content and tag that contents inside selected tag

        innerText give only the content of the tag if the content is hidden it won't show anything

        textContent give the whole content(without html just content) whether it is hidden or not

  <h3> Traversing</h3>
      Traversing is the process of accessing the element or node 
      we can access the child node using method 
          selector.lastElementChild;
          selector.firstElementChild;
          selector.parentElement;
          selector.nextElementSibling;
        
</pre>
