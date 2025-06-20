           <script>
        document.addEventListener('DOMContentLoaded', function() {
            const discountInput = document.getElementById('discount');
            
            // Обработчик изменения скидки
            discountInput.addEventListener('input', calculateDiscounts);
 // Первоначальный расчет
            calculateDiscounts();
            
            function calculateDiscounts() {
                const discount = parseFloat(discountInput.value) || 0;
                const rows = document.querySelectorAll('#productsTable tbody tr:not(.total-row)');
                
                let totalPrice = 0;
                let totalDiscount = 0;
                let totalFinalPrice = 0;
                
                rows.forEach(row => {
                    const priceCell = row.querySelector('.currency');
                    const discountCell = row.querySelector('.discount');
                    const finalPriceCell = row.querySelector('.final-price');
                    
                    // Получаем цену из текста ячейки
                    const priceText = priceCell.textContent.trim();
                    const price = parseFloat(priceText.replace(/\s/g, '').replace(',', '.')) || 0;
                    
                    // Рассчитываем скидку и итоговую цену
                    const discountAmount = price * discount / 100;
                    const finalPrice = price - discountAmount;
                    
                    // Обновляем ячейки
                    discountCell.textContent = discountAmount.toFixed(2).replace('.', ',') + ' ₽';
                    finalPriceCell.textContent = finalPrice.toFixed(2).replace('.', ',') + ' ₽';
                    
                    // Суммируем для итогов
                    totalPrice += price;
                    totalDiscount += discountAmount;
                    totalFinalPrice += finalPrice;
                });
                
                // Обновляем итоговые значения
                document.getElementById('total-price').textContent = totalPrice.toFixed(2).replace('.', ',') + ' ₽';
                document.getElementById('total-discount').textContent = totalDiscount.toFixed(2).replace('.', ',') + ' ₽';
                document.getElementById('total-final-price').textContent = totalFinalPrice.toFixed(2).replace('.', ',') + ' ₽';
            }
        });
    </script>
