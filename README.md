# DiProSaur Rex - Diseño y Programación
---
## Definición de la temática del e-commerce
En esta plataforma se puede contratar **servicios** de diseño UX/XI, diseño web, testing de apps y webs, marketing digital entre otros.

## Historia
DiProSaur Rex nace como el sueño de dos profesionales de unir sus pasiones profesionales: El diseño y la programación.
Estos profesionales, formados en Córdoba, decidieron trabajar conjuntamente para brindar servicios de diseño y programación, tanto de paginas web como de apps.

## Público objetivo 
Toda aquella persona u organización que desee conformar una pagina web o bien desarrollar una aplicación en particular.

## Configuración de la DB
La base de datos, denominada "userdb" consta de dos tablas:
- servicelists
- userlists

"servicelists" almacena la información de los servicios ofrecidos, con un ID, un nombre, una descripción y un precio.
"userkusts" almacena la información de los usuarios, con un ID, un nombre de usuario, un "usuario" para el log-in (que no sea necesariamente igual al nombre del usuario), la contraseña hasheada, un correo y la ubicación (pais) del usuario. Se destaca el usuario llamado Admin, con contraseña de adminitrador igual a "Admin123". 

Los servicios listados hasta el momento son:
Servicio 1: Asesoramiento UX/UI
Servicio 2: Diseño total UX/UI
Servicio 3: Diseño pagina web
Servicio 4: Testing
Servicio 5: Marketing Digital
Servicio 6: Diseño de logotipo

ID  Nombre              Descripcion                                                                                                                     Precio
1	Asesoramiento UX/UI	Analisis y asesoramiento sobre plataformas web y apps existentes respecto de la experiencia para el usuario	                    1500
2	Diseño total UX/UI	Desarrollo total de una nueva interfaz de acuerdo a los mas actuales parámetros de UX/UI	                                    2500
3	Diseño pagina web	Diseño de una pagina web, con una interfaz de usuario definida por el cliente	                                                2500
4	Testing	Servicio de testing de webs y apps	                                                                                                        1750
5	Marketing Digital	Servicio de marketing digital: Desarrollo de estrategias de marga, de identidad de marca, estrategias de mercado, entre otrs	2250
12	Diseño de logotipo	Diseño de logotipo basado en tus ideas y/o branding existente 	                                                                1500

Los usuarios creados hasta el momento son los siguientes
Id          userName    User (log in)   Contraseña hasheada                                             Correo          Pais
0	        Admin	    Admin	        $2b$10$waSXt7v8B0iRR7OWWbPYKewrAjL3ZhgmrnyYOeCcWnHauZ9fz0LXW	Admin@Admin	    Admin
82350766	Amelia	    Amelia	        $2b$10$kJ9Uiugxk2hlLviusgsaAeW0pMzyMeK2Gr5g0LUmNvq6nqUjTmXVK	Amelia@Amelia	Amelandia

## Notas 
- El e-commerce no tiene un contador de ítems seleccionados ya que la plataforma sirve como punto de comercialización de **servicios** y no de productos. Por esta razón, no tiene serntido hablar de cantidad. En lugar de esto se implementó una lógica mediante íconos, en la cual inicialmente todos los servicios ofrecidos tienen un ícono de un carrito con un signo +, al seleccionarlo y agregarlo al carrito, el ícono cambia a uno donde el carrito tiene un signo - en lugar del signo +, dando a entender que el servicio se "extrae" de la lista.
- Los precios de los servicios son simbólicos.
- Las imágenes presentes en la carpeta "assets" tienen relación directa con la lista de los 6 servicios mencionada mas arriba. En caso de crear un nuevo servicio, se tiene que agregar la imagen representativa en la carpeta "assets" siguiendo con la numeración.
- Debido a que la cantidad de servicios que se prevee comercializar (6 de momento), el e-commerce no tiene una barra de búsqueda, ya que los servicios entran facilmente en una sola página sin necesidad de utilizar filtros.
