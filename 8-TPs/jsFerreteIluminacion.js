/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var importefinal;
    var precio=35;
    var descuento;
    var precioDescuento;
    var marca;
    var IIBB;
   
    
    

    
    
    cantidad=document.getElementById('Cantidad').value;
    marca=document.getElementById('Marca').value;
   

    
        cantidad=parseInt(cantidad);      
        if(cantidad>=6)
        {
            descuento=precio*cantidad*0.50;
        }
        else
        {
            if(cantidad==5 && marca=="ArgentinaLuz")
            {
                descuento=precio*cantidad*0.60;
            }
            
           else
        {
            descuento=precio*cantidad*0.70;
        }
            if(cantidad==4 && marca=="ArgentinaLuz" && marca=="FelipeLamparas")
            {
                descuento=precio*cantidad*0.75;
            }
            else
            {
                descuento=cantidad*precio*0.80;
            }
            if(cantidad==3 && marca=="ArgentinaLuz")
            {
                descuento=precio*cantidad*0.85;
            }
            if(cantidad==3 && marca=="FelipeLamparas")
            {
                descuento=precio*cantidad*0.90;
            }
            else
            {
                descuento=precio*cantidad*0.95;

            }
           

        } 

         IIBB=descuento*1.10;
        importefinal=IIBB*0.10;      
        if(descuento>120)
        {
           
            alert("”Usted pago "+IIBB+" de IIBB ,” siendo "+importefinal+" el impuesto que se pagó.");
            
            
        }
        
        
     
    
        
        
        precioDescuento=descuento;
    
    document.getElementById('precioDescuento').value=precioDescuento;
 	
}
