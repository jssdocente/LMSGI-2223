from lxml import etree
import os

filename= 'ies.xml'
fullPath = f"{os.path.dirname(os.path.abspath(__file__))}/{filename}"
doc = etree.parse(fullPath)

print(etree.tostring(doc, pretty_print=True,xml_declaration=True, encoding='UTF-8'))

print(doc.xpath('//ciclos/ciclo[@nombre="DAM"]'))






