const defaultBlogs = [
     {
    id: 1,
    title: "Bí quyết chọn hoa tươi lâu",
    subtitle: "Chia sẻ những mẹo đơn giản để chọn hoa đẹp và giữ được lâu",
    category: "Cách chọn hoa",
    image: "../img/baiviet/mot.jpg",
    content: `<p>Chọn hoa tươi không chỉ cần mắt thẩm mỹ mà còn cần hiểu biết cơ bản về từng loại hoa. Để hoa tươi lâu, bạn nên quan sát kỹ cánh hoa – cánh tươi, không có đốm nâu hay dấu hiệu héo úa là dấu hiệu tốt. Thân hoa phải cứng, không mềm nhũn, không có mùi lạ. Ngoài ra, hãy chọn hoa vào buổi sáng, vì đây là thời điểm hoa còn tươi nhất trong ngày. Khi mua hoa về, nhớ cắt gốc hoa theo đường chéo và đặt vào nước sạch có pha một ít chất dưỡng hoa hoặc vài giọt nước chanh, đường. Hãy tránh để hoa dưới ánh nắng trực tiếp hay gần các thiết bị phát nhiệt. Một mẹo nhỏ nữa là thay nước mỗi ngày và rửa sạch bình hoa. Càng chăm chút tỉ mỉ, bình hoa của bạn sẽ càng tươi lâu và đẹp hơn.</p>`,
    createdAt: "24/07/2025 08:30"
  },
  {
    id: 2,
    title: "Cách chăm sóc hoa tươi tại nhà",
    subtitle: "Hướng dẫn bảo quản hoa đơn giản mà hiệu quả",
    category: "Chăm sóc hoa",
    image: "../img/baiviet/hai.jpg",
    content: `<p>Hoa tươi cần được chăm sóc đúng cách để giữ được vẻ đẹp tự nhiên lâu hơn. Sau khi mua về, bạn nên cắt gốc hoa bằng kéo sắc dưới vòi nước để tránh không khí xâm nhập làm tắc mạch dẫn. Tiếp theo, cho hoa vào bình sạch có nước mát, tránh để lá ngập nước vì dễ gây thối gốc. Nếu có thể, hãy sử dụng gói dưỡng hoa đi kèm hoặc thay bằng vài giọt nước chanh + đường để nuôi hoa. Đặt hoa ở nơi mát mẻ, tránh gió mạnh, điều hòa và ánh nắng trực tiếp. Ngoài ra, thay nước hàng ngày và cắt tỉa gốc thường xuyên cũng giúp hoa tươi lâu hơn. Với những loài hoa đặc biệt như tulip, ly hay hướng dương, bạn nên đọc kỹ hướng dẫn bảo quản riêng để đạt hiệu quả cao nhất. Cắm hoa không chỉ là nghệ thuật mà còn là cách thư giãn, chăm hoa giúp cân bằng tinh thần giữa cuộc sống bận rộn.</p>`,
    createdAt: "24/07/2025 10:00"
  },
{
  id: 3,
  title: "Ý nghĩa hoa hướng dương",
  subtitle: "Khám phá thông điệp tích cực từ loài hoa mặt trời",
  category: "Chia sẻ về đời sống",
  image: "../img/baiviet/ba.jpg",
  content: `<p>Hoa hướng dương không chỉ nổi bật với vẻ đẹp rực rỡ mà còn mang nhiều ý nghĩa sâu sắc trong cuộc sống. Được ví như biểu tượng của mặt trời, hoa hướng dương tượng trưng cho sự lạc quan, niềm tin, và hy vọng. Trong văn hóa phương Tây, loài hoa này được xem như biểu hiện của lòng trung thành và sự kiên định. Dù mặt trời ở đâu, hoa hướng dương luôn xoay theo ánh sáng – điều này thể hiện tinh thần không bỏ cuộc, luôn hướng về điều tốt đẹp.

Không chỉ mang giá trị tinh thần, hoa hướng dương còn có ý nghĩa trong phong thủy. Người ta tin rằng đặt một bó hoa hướng dương trong nhà sẽ mang lại sự may mắn, nguồn năng lượng tích cực và giúp các thành viên trong gia đình thêm gắn bó. Trong tình yêu, hoa tượng trưng cho lòng chung thủy, chân thành và luôn sát cánh bên nhau qua mọi thử thách.

Với màu vàng đặc trưng, hướng dương còn mang lại cảm giác ấm áp, hạnh phúc, và là món quà tuyệt vời để cổ vũ tinh thần cho ai đó đang trải qua khó khăn. Đây cũng là lựa chọn hàng đầu trong các dịp lễ tốt nghiệp, khai trương hoặc chúc mừng thành công. Hãy thử tặng một bó hoa hướng dương cho người bạn yêu thương – bạn sẽ thấy nụ cười rạng rỡ trên khuôn mặt họ giống như ánh mặt trời.</p>`,
  createdAt: "24/07/2025 11:00"
},
{
  id: 4,
  title: "Top 5 loài hoa nên trưng vào dịp Tết",
  subtitle: "Gợi ý những loài hoa mang lại may mắn và tài lộc cho năm mới",
  category: "Chia sẻ về đời sống",
  image: "../img/baiviet/bon.jpg",
  content: `<p>Dịp Tết Nguyên Đán là thời điểm mọi nhà đều muốn trang hoàng không gian sống bằng những loài hoa tươi đẹp, không chỉ để tăng tính thẩm mỹ mà còn gửi gắm những lời chúc may mắn, an lành cho cả năm. Dưới đây là 5 loài hoa bạn nên cân nhắc để trưng bày vào dịp Tết.

1. **Hoa mai (miền Nam)** – biểu tượng của sự phú quý, giàu sang. Hoa mai vàng rực mang ý nghĩa tươi sáng, khởi đầu thuận lợi. Cây mai càng nhiều nụ, nhiều hoa thì năm mới càng hứa hẹn nhiều lộc.

2. **Hoa đào (miền Bắc)** – tượng trưng cho sự đổi mới, sinh sôi, và hạnh phúc. Màu hồng của đào mang lại cảm giác nhẹ nhàng, an nhiên. Nhiều người còn tin rằng hoa đào xua đuổi tà khí, bảo vệ gia đình.

3. **Hoa cúc** – với màu vàng đặc trưng, hoa cúc đại diện cho sự trường thọ, bền bỉ và may mắn. Cúc không chỉ dễ chăm mà còn giữ được lâu, rất phù hợp để trưng trong suốt dịp Tết.

4. **Hoa lay ơn** – loài hoa này mang ý nghĩa của lòng biết ơn và sự hiếu thảo. Với dáng đứng thẳng, hoa còn tượng trưng cho sự kiên định, ý chí vươn lên trong cuộc sống.

5. **Hoa thủy tiên** – thường được trồng trong chậu nước nhỏ, hoa thủy tiên trắng ngà mang vẻ đẹp thanh tao, tinh tế. Người xưa tin rằng nếu thủy tiên nở đúng đêm Giao thừa sẽ mang lại tài lộc cho cả năm.

Khi trưng hoa Tết, hãy chú ý chọn hoa còn nhiều nụ để nở đúng dịp đầu năm. Đặt hoa ở nơi sáng sủa, thoáng mát để tạo sinh khí cho căn nhà. Hoa không chỉ làm đẹp mà còn mang lại tâm trạng tích cực cho mọi thành viên trong gia đình.</p>`,
  createdAt: "24/07/2025 12:00"
},
{
  id: 5,
  title: "Cách bảo quản hoa sau khi mua về",
  subtitle: "Giúp hoa tươi lâu hơn và giữ được vẻ đẹp tự nhiên",
  category: "Chăm sóc hoa",
  image: "../img/baiviet/nam.jpg",
  content: `<p>Sau khi mua hoa về, nhiều người thường bối rối không biết làm sao để giữ hoa tươi được lâu. Việc bảo quản hoa đúng cách không chỉ giúp kéo dài tuổi thọ của hoa mà còn giữ được vẻ đẹp và hương thơm vốn có của chúng. Dưới đây là những mẹo đơn giản nhưng cực kỳ hiệu quả bạn nên áp dụng ngay.

**1. Cắt tỉa cành hoa trước khi cắm**: Sau khi mua hoa về, bạn nên cắt vát phần gốc cành hoa (góc 45 độ) bằng dao sắc để tăng diện tích tiếp xúc nước. Tránh dùng kéo cùn vì sẽ làm dập cành khiến hoa hút nước kém. Nên cắt dưới vòi nước hoặc trong thau nước để tránh không khí lọt vào thân cành.

**2. Loại bỏ lá dưới nước**: Bất kỳ chiếc lá nào chạm nước cũng có thể là nguồn vi khuẩn khiến nước nhanh hỏng và hoa chóng tàn. Trước khi cắm hoa, hãy loại bỏ toàn bộ lá ở phần thân sẽ ngập trong nước.

**3. Dùng nước sạch và thay nước hàng ngày**: Nước máy nên được để lắng qua đêm trước khi dùng. Mỗi ngày bạn nên thay nước, rửa sạch bình hoa và cắt lại phần gốc một chút để hoa hút nước tốt hơn.

**4. Bảo quản hoa ở nơi mát mẻ**: Tránh đặt hoa ở nơi có ánh nắng trực tiếp, gần tivi, máy lạnh hoặc cửa sổ có gió lùa mạnh. Nhiệt độ cao khiến hoa nhanh mất nước và héo sớm. Vào ban đêm, có thể đưa bình hoa vào phòng mát hoặc hành lang để "nghỉ ngơi".

**5. Dùng chất dinh dưỡng hoặc mẹo dân gian**: Có thể sử dụng gói dưỡng hoa kèm theo khi mua, hoặc pha nước cắm hoa với một chút đường và giấm trắng. Một vài giọt nước chanh hay nước súc miệng cũng giúp giảm vi khuẩn. Ngoài ra, một đồng xu hoặc viên aspirin nghiền nhỏ cũng được nhiều người tin dùng.

**6. Phân loại và chăm hoa riêng biệt**: Mỗi loại hoa có thời gian sống khác nhau và cần điều kiện chăm sóc riêng. Nếu bạn cắm nhiều loại hoa chung, nên chú ý đến khả năng tương thích. Ví dụ: hoa thủy tiên không nên cắm chung với hoa khác do có độc tố gây hại.

Áp dụng đúng các bước trên, bạn hoàn toàn có thể giữ bó hoa của mình tươi lâu đến cả tuần lễ hoặc hơn. Hãy dành thời gian chăm chút cho hoa mỗi ngày, bởi hoa không chỉ là vật trang trí mà còn là liều thuốc tinh thần quý giá giúp bạn thư giãn và yêu đời hơn.</p>`,
  createdAt: "24/07/2025 13:00"
},
{
  id: 6,
  title: "Những loại hoa dễ trồng tại nhà",
  subtitle: "Trang trí không gian sống với những loài hoa thân thiện",
  category: "Chăm sóc hoa",
  image: "../img/baiviet/sau.jpg",
  content: `<p>Việc tự tay trồng hoa tại nhà không chỉ giúp không gian sống thêm sinh động mà còn là hoạt động thư giãn tinh thần hiệu quả. Nếu bạn là người mới bắt đầu, dưới đây là một số loại hoa dễ trồng, dễ chăm sóc, lại rất đẹp mắt mà bạn nên thử ngay.

**1. Hoa mười giờ**: Đây là loài hoa cực kỳ dễ trồng và không cần nhiều chăm sóc. Chỉ cần một ít đất và ánh nắng, mười giờ sẽ nở rực rỡ mỗi sáng. Màu sắc phong phú từ đỏ, vàng, hồng đến trắng giúp sân vườn thêm tươi vui.

**2. Hoa cúc họa mi**: Nhỏ nhắn, tinh khôi, cúc họa mi rất phù hợp với ban công hoặc góc nhỏ trong vườn. Cây chịu nắng tốt và chỉ cần tưới nước mỗi ngày một lần là đủ.

**3. Hoa đồng tiền**: Mang ý nghĩa về tài lộc và may mắn, đồng tiền là loài hoa được yêu thích vào dịp Tết. Cây có thể trồng trong chậu nhỏ, đặt ở ban công hay bệ cửa sổ đều hợp. Chỉ cần tưới nước vào sáng sớm và đảm bảo ánh nắng nhẹ là cây phát triển tốt.

**4. Hoa sen đá (hoa đá)**: Nếu bạn quá bận rộn, sen đá là lựa chọn lý tưởng. Cây không cần tưới nhiều, chịu khô hạn cực tốt, lại có vẻ ngoài độc đáo, phù hợp để bàn làm việc hoặc góc học tập.

**5. Hoa giấy**: Hoa giấy leo tường giúp làm dịu ánh nắng, đồng thời tạo điểm nhấn cho mặt tiền nhà. Cây lớn nhanh, ra hoa quanh năm và gần như không cần chăm sóc cầu kỳ.

**6. Hoa thạch thảo**: Loài hoa mang vẻ đẹp nhẹ nhàng này rất dễ trồng ở nơi có ánh nắng nhẹ. Đất cần tơi xốp và thoát nước tốt, tưới nước cách ngày và tỉa cành định kỳ để hoa mọc đều.

**7. Hoa lan ý (peace lily)**: Lan ý không chỉ đẹp mà còn có khả năng thanh lọc không khí rất tốt. Loài hoa này thích hợp đặt trong nhà, ưa bóng râm và không cần nhiều ánh sáng. Tưới nước mỗi tuần 1-2 lần là đủ.

Ngoài ra, trồng hoa tại nhà còn giúp bạn gắn bó hơn với thiên nhiên, giảm căng thẳng và tăng năng lượng tích cực mỗi ngày. Bạn có thể chọn loại hoa phù hợp với khí hậu và không gian nhà mình để bắt đầu ngay hôm nay. Đừng ngại thử vì việc trồng hoa đơn giản hơn bạn nghĩ rất nhiều!</p>`,
  createdAt: "24/07/2025 14:00"
},
{
  id: 7,
  title: "Ý nghĩa các loài hoa trong ngày cưới",
  subtitle: "Mỗi bông hoa mang một lời chúc phúc đến cô dâu chú rể",
  category: "Chia sẻ về đời sống",
  image: "../img/baiviet/bay.jpg",
  content: `<p>Trong ngày cưới – khoảnh khắc thiêng liêng của tình yêu và sự gắn bó trọn đời – hoa không chỉ đóng vai trò trang trí mà còn gửi gắm nhiều ý nghĩa tinh thần sâu sắc. Mỗi loại hoa đều mang một thông điệp riêng, góp phần làm nên vẻ đẹp và sự trang trọng cho lễ cưới.

**1. Hoa hồng**: Không thể thiếu trong bất kỳ đám cưới nào, hoa hồng là biểu tượng của tình yêu bất diệt. Hoa hồng đỏ thể hiện đam mê nồng nàn, trong khi hồng trắng là hiện thân của sự thuần khiết và khởi đầu mới. Hoa hồng hồng mang ý nghĩa dịu dàng, lãng mạn.

**2. Hoa lan**: Với vẻ đẹp sang trọng và thanh cao, hoa lan tượng trưng cho vẻ đẹp tinh tế, sự giàu có và hạnh phúc lứa đôi. Hoa lan thường xuất hiện trong bó hoa cưới, hoa cài áo chú rể hoặc trang trí tiệc cưới theo phong cách hiện đại.

**3. Hoa mẫu đơn**: Được xem là nữ hoàng của các loài hoa, mẫu đơn mang đến vẻ đẹp quý phái và tượng trưng cho hạnh phúc viên mãn. Trong văn hóa Á Đông, mẫu đơn còn là biểu tượng của phú quý, thịnh vượng – rất phù hợp cho lễ cưới truyền thống.

**4. Hoa baby (hoa bi)**: Tuy nhỏ bé nhưng hoa baby lại tượng trưng cho sự thuần khiết, vĩnh cửu. Bó hoa cưới kết hợp baby trắng với hoa hồng tạo nên sự tinh tế và nhẹ nhàng, được nhiều cô dâu yêu thích.

**5. Hoa hướng dương**: Mang đến sự ấm áp và niềm tin vào tương lai, hướng dương là biểu tượng của lòng trung thành và niềm hi vọng. Với sắc vàng rực rỡ, loài hoa này thường được sử dụng trong các đám cưới phong cách trẻ trung, năng động.

**6. Hoa cẩm tú cầu**: Loài hoa này tượng trưng cho sự chân thành và lời cảm ơn sâu sắc. Trong lễ cưới, cẩm tú cầu thường được cắm xen kẽ với các loài hoa khác để tạo điểm nhấn và gửi gắm thông điệp yêu thương.

**7. Hoa lily (hoa ly)**: Hoa ly mang vẻ đẹp thuần khiết, sang trọng. Lily trắng là lựa chọn phổ biến nhất cho lễ cưới bởi tượng trưng cho tình yêu trong sáng, sự chung thủy và hạnh phúc trọn vẹn.

Mỗi loài hoa trong lễ cưới không chỉ tô điểm cho không gian mà còn là lời chúc phúc lặng thầm gửi đến cặp đôi mới cưới. Khi chọn hoa cưới, hãy ưu tiên không chỉ màu sắc yêu thích mà còn cân nhắc đến thông điệp mà bạn muốn gửi gắm trong ngày trọng đại này.</p>`,
  createdAt: "24/07/2025 15:00"
},
{
  id: 8,
  title: "Cách chọn hoa phù hợp cho từng dịp lễ",
  subtitle: "Gửi đúng loại hoa – truyền tải đúng cảm xúc",
  category: "Chia sẻ về đời sống",
  image: "../img/baiviet/tam.jpg",
  content: `<p>Không phải ai cũng biết rằng mỗi dịp đặc biệt lại phù hợp với những loại hoa khác nhau. Việc chọn đúng loài hoa không chỉ thể hiện sự tinh tế mà còn góp phần truyền tải đúng cảm xúc và thông điệp bạn muốn gửi gắm.

**1. Ngày sinh nhật**: Đây là dịp vui tươi, vì vậy nên chọn những loài hoa tươi sáng và rực rỡ như hoa hướng dương, hoa cúc đồng tiền, hoa tulip hoặc hoa hồng. Mỗi loài hoa tượng trưng cho niềm vui, sự trẻ trung và những lời chúc tốt đẹp.

**2. Ngày Valentine**: Hoa hồng đỏ luôn là lựa chọn hàng đầu cho ngày lễ tình nhân. Tuy nhiên, bạn có thể cá nhân hóa bằng cách chọn hồng phấn (lãng mạn nhẹ nhàng), hồng trắng (thuần khiết) hoặc hoa oải hương (tình yêu bền vững).

**3. Ngày Phụ nữ Việt Nam / Quốc tế phụ nữ**: Những bó hoa cẩm chướng, hoa ly, hoa lan hay hướng dương đều phù hợp để tôn vinh vẻ đẹp và sự dịu dàng của người phụ nữ. Bạn nên chọn màu sắc nhẹ nhàng như hồng, trắng, tím để thể hiện sự yêu mến, trân trọng.

**4. Ngày khai trương**: Các loài hoa như đồng tiền, lan hồ điệp, cúc vàng hoặc cát tường thường được lựa chọn để chúc mừng khai trương bởi ý nghĩa may mắn, phát tài, thuận lợi và thịnh vượng. Những lẵng hoa lớn, màu sắc tươi sáng sẽ tạo ấn tượng tốt.

**5. Ngày lễ tết**: Hoa mai, hoa đào, hoa thủy tiên hay trạng nguyên là biểu tượng cho sự may mắn, tài lộc và khởi đầu mới. Khi chọn hoa chơi tết, nên chú trọng đến màu sắc hợp phong thủy và không gian bài trí.

**6. Viếng đám tang**: Hoa trắng (cúc trắng, hồng trắng, lan trắng) thường được chọn để thể hiện sự tiếc thương và chia buồn. Những bó hoa nên giản dị, tinh tế, tránh màu quá nổi bật hay kiểu dáng cầu kỳ.

**7. Kỷ niệm ngày cưới**: Tùy theo năm kỷ niệm, bạn có thể chọn loài hoa tượng trưng: hoa cẩm tú cầu (năm thứ 1), hoa hồng (năm thứ 5), hoa lan (năm thứ 10), hoặc hoa tulip (năm thứ 15). Hãy gửi gắm vào đó lời chúc cho một tình yêu ngày càng bền chặt.

**8. Ngày tốt nghiệp**: Hoa hướng dương, hoa đồng tiền hoặc hoa cẩm chướng là những lựa chọn tuyệt vời để chúc mừng thành công. Bạn có thể chọn một bó hoa tươi hoặc lẵng hoa để thể hiện sự ngưỡng mộ và kỳ vọng vào tương lai.

Lựa chọn hoa không chỉ là chọn cái đẹp mà còn là chọn sự tinh tế trong giao tiếp. Mỗi bông hoa mang một thông điệp, và nếu chọn đúng, bạn đã gửi đi lời chúc đầy ý nghĩa mà không cần nói thành lời.</p>`,
  createdAt: "24/07/2025 16:00"
},
{
  id: 9,
  title: "Cách chăm sóc hoa tươi lâu hơn tại nhà",
  subtitle: "Mẹo nhỏ giữ hoa luôn tươi đẹp trong nhiều ngày",
  category: "Chia sẻ về đời sống",
  image: "../img/baiviet/chin.jpg",
  content: `<p>Hoa tươi không chỉ làm đẹp không gian sống mà còn giúp tinh thần thư giãn, tạo cảm giác dễ chịu. Tuy nhiên, nếu không biết cách chăm sóc đúng cách, hoa rất nhanh héo và mất đi vẻ đẹp ban đầu. Dưới đây là những bí quyết đơn giản giúp bạn giữ hoa tươi lâu hơn tại nhà:

**1. Cắt vát gốc hoa đúng cách**  
Trước khi cắm hoa, bạn nên cắt vát phần gốc (khoảng 45 độ) dưới vòi nước để tránh không khí lọt vào thân cây. Cách này giúp hoa hút nước dễ dàng hơn. Đồng thời, nên cắt lại gốc mỗi 1–2 ngày/lần.

**2. Làm sạch bình và nước cắm hoa**  
Bình hoa cần được rửa sạch bằng nước ấm và xà phòng để loại bỏ vi khuẩn. Dùng nước sạch (tốt nhất là nước đã lọc) để cắm hoa. Tránh dùng nước máy có nhiều clo vì dễ làm hoa nhanh héo.

**3. Loại bỏ lá ngập nước**  
Lá bị ngập trong nước sẽ nhanh mục, tạo môi trường cho vi khuẩn phát triển. Bạn nên tỉa bỏ lá bên dưới trước khi cắm vào bình để nước không bị bẩn.

**4. Thay nước thường xuyên**  
Hãy thay nước cắm hoa mỗi ngày hoặc ít nhất 2 ngày/lần. Khi thay nước, nhớ rửa bình và cắt lại gốc hoa để hoa hấp thu nước tốt hơn.

**5. Dùng chất bảo quản hoa tự nhiên**  
Bạn có thể cho một vài giọt nước cốt chanh, đường hoặc dấm táo vào nước cắm hoa. Một số người còn dùng thuốc aspirin nghiền nát để giúp kháng khuẩn. Ngoài ra, trên thị trường cũng có gói dưỡng hoa chuyên dụng rất tiện lợi.

**6. Tránh ánh nắng trực tiếp và gió mạnh**  
Đặt bình hoa nơi thoáng mát, tránh xa ánh nắng trực tiếp, quạt hoặc máy lạnh. Gió mạnh sẽ làm hoa mất nước nhanh hơn và chóng tàn.

**7. Chọn hoa tươi ngay từ đầu**  
Cuối cùng, việc lựa chọn hoa tươi chất lượng cao khi mua là yếu tố then chốt. Hoa có cánh chắc, màu tươi sáng, không dập nát sẽ luôn giữ được độ tươi lâu hơn.

Với những bí quyết nhỏ nhưng hiệu quả trên, bạn hoàn toàn có thể tận hưởng vẻ đẹp của hoa trong nhiều ngày liền. Một lọ hoa tươi không chỉ làm đẹp không gian mà còn góp phần tạo nên năng lượng tích cực cho cả gia đình.</p>`,
  createdAt: "24/07/2025 17:00"
},
{
  id: 10,
  title: "Tự tay cắm hoa nghệ thuật tại nhà đơn giản",
  subtitle: "Biến góc nhỏ thành không gian nghệ thuật với vài bước cơ bản",
  category: "Chia sẻ về đời sống",
  image: "../img/baiviet/muoi.jpg",
  content: `<p>Không cần phải là nghệ nhân hay chuyên gia, bạn hoàn toàn có thể tự tay tạo ra một bình hoa đẹp mắt ngay tại nhà. Chỉ với một chút khéo léo và sự yêu thích, việc cắm hoa sẽ trở thành hoạt động thư giãn tuyệt vời giúp làm đẹp không gian sống.

**1. Chuẩn bị dụng cụ cần thiết**  
Trước khi bắt đầu, hãy chuẩn bị:
- Hoa tươi (chọn 2–3 loại hoa chính và phụ)
- Kéo cắt cành chuyên dụng
- Bình hoa hoặc xốp cắm
- Lá trang trí hoặc cành phụ trợ (baby, dương xỉ…)

**2. Chọn phối màu phù hợp**  
Bạn có thể chọn theo phong cách đơn giản (tone trắng, pastel), hoặc tươi sáng (vàng – đỏ – cam). Màu sắc hoa nên hài hòa với không gian hoặc nội thất nơi trưng bày.

**3. Cắm theo hình dáng mong muốn**  
- Cắm tròn: phù hợp cho bàn tiệc, bàn ăn, bàn tiếp khách.
- Cắm dạng rủ (hoa rơi xuống): thích hợp cho góc nhà, kệ sách.
- Cắm dáng cao (tỉa tầng): tạo chiều sâu, phù hợp với phòng khách, lối đi.

**4. Quy tắc bố cục cơ bản**  
Bắt đầu với lá hoặc hoa phụ để tạo khung, sau đó lần lượt cắm hoa chính theo bố cục đã định. Hoa to, màu đậm đặt ở trung tâm; hoa nhỏ, nhẹ ở viền ngoài để tạo sự cân đối.

**5. Tạo điểm nhấn**  
Dùng 1–2 bông hoa khác màu hoặc kích thước đặc biệt để làm điểm nhấn. Tránh dùng quá nhiều loại sẽ gây rối mắt.

**6. Cắt gốc và xử lý hoa đúng cách**  
Cắt gốc xéo để hoa hút nước tốt. Loại bỏ lá ngập trong nước. Nếu dùng xốp, nhớ ngâm xốp kỹ trong nước trước khi cắm.

**7. Bảo quản và chỉnh sửa định kỳ**  
Sau khi hoàn tất, bạn nên thay nước (hoặc thêm nước vào xốp) thường xuyên, điều chỉnh vị trí hoa nếu cần. Tránh để hoa dưới quạt hoặc ánh nắng trực tiếp.

Việc cắm hoa không đòi hỏi quá nhiều kỹ thuật, điều quan trọng là bạn cắm bằng sự yêu thích và cảm xúc. Mỗi bình hoa đều là một tác phẩm nghệ thuật – phản ánh tâm trạng và gu thẩm mỹ của người tạo ra nó.</p>`,
  createdAt: "24/07/2025 18:00"
}

];

if (!localStorage.getItem('blogs') || JSON.parse(localStorage.getItem('blogs')).length === 0) {
    localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
}



// Đăng ký các module mở rộng cho Quill
if (window.Quill && window.Quill.imports && window.Quill.imports['modules/imageResize']) {
    Quill.register('modules/imageResize', window.Quill.imports['modules/imageResize']);
}

// Khởi tạo Quill editor cho crblog.html
$(function() {
    // Khởi tạo Quill một lần duy nhất khi trang load
    let quill = new Quill('#editor', {
        modules: {
            toolbar: [
                [{ 'header': [1, 2, 3, 4, 5, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['link', 'image'],
                ['clean']
            ],
            imageResize: {
                modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            }
        },
        theme: 'snow'
    });

    // Mở modal tạo mới
    $('#open-create-blog').on('click', function() {
        $('#createBlogModal').modal('show');
        quill.setContents([]); // reset nội dung
        $('#blog-title').val('');
        $('#blog-subtitle').val('');
        $('#blog-category').val('');
        $('#blog-image').val('');
        $('#save-blog').off('click').on('click', saveNewBlog);
    });

    // Hàm lưu mới
    function saveNewBlog() {
        const title = $('#blog-title').val().trim();
        const subtitle = $('#blog-subtitle').val().trim();
        const category = $('#blog-category').val();
        const image = $('#blog-image').val();
        const content = quill.root.innerHTML;
        if (!title || !content || !category) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const id = Date.now();
        blogs.unshift({ id, title, subtitle, content, category, image, createdAt: new Date().toLocaleString() });
        localStorage.setItem('blogs', JSON.stringify(blogs));
        $('#createBlogModal').modal('hide');
        renderBlogList();
    }

    // Hàm chỉnh sửa bài viết
    window.editBlog = function(id) {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        let blog = blogs.find(b => b.id === id);
        if (!blog) return;
        $('#createBlogModal').modal('show');
        $('#blog-title').val(blog.title);
        $('#blog-subtitle').val(blog.subtitle);
        $('#blog-category').val(blog.category);
        $('#blog-image').val(blog.image);
        quill.root.innerHTML = blog.content;
        $('#save-blog').off('click').on('click', function() {
            blog.title = $('#blog-title').val().trim();
            blog.subtitle = $('#blog-subtitle').val().trim();
            blog.category = $('#blog-category').val();
            blog.image = $('#blog-image').val();
            blog.content = quill.root.innerHTML;
            localStorage.setItem('blogs', JSON.stringify(blogs));
            $('#createBlogModal').modal('hide');
            renderBlogList();
            $('#save-blog').off('click').on('click', saveNewBlog);
        });
    };

    // Hiển thị danh sách bài viết
    function renderBlogList() {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        let html = '';
        if (blogs.length === 0) {
            html = '<div class="text-center mt-4">Chưa có bài viết nào.</div>';
        } else {
            html = blogs.map(blog => `
    <div class="card mb-3 shadow-sm">
        <div class="row g-0">
            <div class="col-md-3">
                <img src="${blog.image}"
                     onerror="this.onerror=null;this.src='../img/baiviet/mot.jpg';"
                     class="img-fluid rounded-start"
                     style="width:100%;height:120px;object-fit:cover;">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <span class="badge bg-light text-dark">${blog.category || ''}</span>
                    <h5 class="card-title fw-bold">
                        <a href="blogtt.html?id=${blog.id}" style="text-decoration:none;color:#222;">
                            ${blog.title}
                        </a>
                    </h5>
                    <p class="card-text">${blog.subtitle || ''}</p>
                    <div class="mb-2"><small>${blog.createdAt}</small></div>
                    <button class="btn btn-danger btn-sm" onclick="deleteBlog(${blog.id})">Xóa</button>
                    <button class="btn btn-warning btn-sm" onclick="changeCategory(${blog.id})">Chuyển danh mục</button>
                    <button class="btn btn-info btn-sm" onclick="editBlog(${blog.id})">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
`).join('');
        }
        $('#blog-list').html(html);
    }

    // Xóa bài viết
    window.deleteBlog = function(id) {
        if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return;
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        blogs = blogs.filter(b => b.id !== id);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        renderBlogList();
    };

    // Chuyển danh mục
    window.changeCategory = function(id) {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        let blog = blogs.find(b => b.id === id);
        if (!blog) return;
        const newCat = prompt('Nhập danh mục mới (Hoa sinh nhật, Hoa khai trương, Hoa cưới):', blog.category);
        if (!newCat) return;
        blog.category = newCat;
        localStorage.setItem('blogs', JSON.stringify(blogs));
        renderBlogList();
    };

    // Hiển thị danh sách khi vào trang
    renderBlogList();
});

// Hiển thị danh sách bài viết ở blog.html
if (window.location.pathname.includes('blog.html')) {
    $(function() {
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        // Lấy từ khóa tìm kiếm từ URL
        const params = new URLSearchParams(window.location.search);
        const keyword = (params.get('keyword') || '').toLowerCase();

        // Nếu có từ khóa, lọc theo tên hoặc danh mục
        if (keyword) {
            blogs = blogs.filter(b =>
                (b.title && b.title.toLowerCase().includes(keyword)) ||
                (b.category && b.category.toLowerCase().includes(keyword))
            );
        }

        // Đếm số bài theo danh mục hoa
        let countSinhnhat = blogs.filter(b => b.category === 'Hoa sinh nhật').length;
        let countKhaitruong = blogs.filter(b => b.category === 'Hoa khai trương').length;
        let countCuoi = blogs.filter(b => b.category === 'Hoa cưới').length;
        $('#count-sinhnhat').text(`${countSinhnhat} bài viết`);
        $('#count-khaitruong').text(`${countKhaitruong} bài viết`);
        $('#count-cuoi').text(`${countCuoi} bài viết`);

        // Đếm số bài theo danh mục khác
        let countChonhoa = blogs.filter(b => b.category === 'Cách chọn hoa').length;
        let countChamsoc = blogs.filter(b => b.category === 'Chăm sóc hoa').length;
        let countDoisong = blogs.filter(b => b.category === 'Chia sẻ về đời sống').length;
        $('#count-chonhoa').text(`${countChonhoa} bài viết`);
        $('#count-chamsoc').text(`${countChamsoc} bài viết`);
        $('#count-doisong').text(`${countDoisong} bài viết`);

        // Bài viết nổi bật (bài đầu tiên)
        if (blogs.length > 0) {
            let featured = blogs[0];
            $('#featured-blog').html(`
                <div class="card mb-3 shadow">
                    <img src="${featured.image || '../img/nen/hoadep.jpg'}" class="card-img-top" style="height:300px;object-fit:cover;">
                    <div class="card-body">
                        <span class="badge bg-secondary">${featured.category || ''}</span>
                        <h3 class="card-title mt-2 fw-bold">
                            <a href="blogtt.html?id=${featured.id}" style="text-decoration:none;color:#222;">${featured.title}</a>
                        </h3>
                        <p class="card-text">${featured.subtitle || ''}</p>
                    </div>
                </div>
            `);
        }

        // Các bài viết nhỏ bên phải (tối đa 5 bài tiếp theo)
        let sideBlogs = blogs.slice(1, 6).map(blog => `
            <div class="mb-3 border-bottom pb-2">
                <span class="badge bg-light text-dark">${blog.category || ''}</span>
                <a href="blogtt.html?id=${blog.id}" style="text-decoration:none;color:#222;">
                    <div class="fw-bold">${blog.title}</div>
                </a>
            </div>
        `).join('');
        $('#side-blogs').html(sideBlogs);

        // Danh sách bài viết còn lại
        let listBlogs = blogs.map(blog => `
            <div class="card mb-3 shadow-sm">
                <div class="row g-0">
                    <div class="col-md-3">
                        <a href="blogtt.html?id=${blog.id}">
                            <img src="${blog.image || '../img/nen/hoadep.jpg'}"
                                 onerror="this.src='../img/nen/hoadep.jpg';"
                                 class="img-fluid rounded-start"
                                 style="width:100%;height:120px;object-fit:cover;object-position:center;">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <span class="badge bg-light text-dark">${blog.category || ''}</span>
                            <h5 class="card-title fw-bold">${blog.title}</h5>
                            <p class="card-text">${blog.subtitle || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        $('#blog-list').html(listBlogs);
    });
}

// Hiển thị chi tiết bài viết ở blogtt.html
if (window.location.pathname.includes('blogtt.html')) {
    $(function() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const blog = blogs.find(b => b.id == id);

        let detailHtml = '';
        if (!blog) {
            detailHtml = '<div class="text-center mt-4">Bài viết không tồn tại.</div>';
        } else {
            detailHtml = `
            <div class="mt-4">
                <h2 class="fw-bold text-center" style="font-size:2rem;">${blog.title}</h2>
                <h5 class="text-muted text-center mb-3">${blog.subtitle || ''}</h5>
                <div class="text-center mb-2">
                    <span class="badge bg-success" style="font-size:1rem;">${blog.category || ''}</span>
                    <span class="ms-2 text-secondary"><small>${blog.createdAt}</small></span>
                </div>
                <div class="text-center mb-4">
                    <img src="${blog.image || '../img/nen/hoadep.jpg'}" alt="Ảnh bài viết" class="blogtt-detail-img">
                </div>
                <div class="blog-content" style="font-size:1.1rem;line-height:1.8;">
                    ${blog.content}
                </div>
                <div class="text-center mt-4">
                    <a href="blog.html" class="btn btn-secondary">Quay lại danh sách</a>
                </div>
            </div>`;
        }
        $('#blog-detail').html(detailHtml);

        // Hiển thị danh sách bài viết mới
        let recentHtml = blogs.slice(0, 5).map(b => `
            <div class="blogtt-sidebar-row">
                <a href="blogtt.html?id=${b.id}">
                    <img src="${b.image || '../img/nen/hoadep.jpg'}" alt="" class="blogtt-sidebar-img">
                </a>
                <div style="flex:1; min-width:0;">
                    <a href="blogtt.html?id=${b.id}" class="blogtt-sidebar-title">${b.title}</a>
                    <div class="blogtt-sidebar-date">${b.createdAt}</div>
                </div>
            </div>
        `).join('');
        $('#recent-blogs').html(recentHtml);
    });
}

// Tìm kiếm bài viết ngay trên crblog.html
if (window.location.pathname.includes('crblog.html')) {
    $(function() {
        $('#search-box').on('input', function() {
            const keyword = $(this).val().toLowerCase();
            let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            let filtered = blogs.filter(b =>
                (b.title && b.title.toLowerCase().includes(keyword)) ||
                (b.category && b.category.toLowerCase().includes(keyword))
            );
            let html = '';
            if (filtered.length === 0) {
                html = '<div class="text-center mt-4">Không tìm thấy bài viết nào.</div>';
            } else {
                html = filtered.map(blog => `
                    <div class="card mb-3 shadow-sm">
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="${blog.image}"
                                     onerror="this.onerror=null;this.src='../img/baiviet/mot.jpg';"
                                     class="img-fluid rounded-start"
                                     style="width:100%;height:120px;object-fit:cover;">
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <span class="badge bg-light text-dark">${blog.category || ''}</span>
                                    <h5 class="card-title fw-bold">
                                        <a href="blogtt.html?id=${blog.id}" style="text-decoration:none;color:#222;">
                                            ${blog.title}
                                        </a>
                                    </h5>
                                    <p class="card-text">${blog.subtitle || ''}</p>
                                    <div class="mb-2"><small>${blog.createdAt}</small></div>
                                    <button class="btn btn-danger btn-sm" onclick="deleteBlog(${blog.id})">Xóa</button>
                                    <button class="btn btn-warning btn-sm" onclick="changeCategory(${blog.id})">Chuyển danh mục</button>
                                    <button class="btn btn-info btn-sm" onclick="editBlog(${blog.id})">Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            $('#blog-list').html(html);
        });
    });
}

// Ví dụ render từng blog:
html += `
  <div class="blog-item">
    <a href="blogtt.html?id=${blog.id}" class="blog-link">
      <h3>${blog.title}</h3>
      <p>${blog.summary}</p>
    </a>
  </div>
`;
$(document).ready(function() {
    let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    let html = '';
    blogs.forEach(blog => {
        html += `
        <div class="blog-item mb-3">
            <a href="blogtt.html?id=${blog.id}" class="blog-link" style="text-decoration:none; color:inherit;">
                <h3>${blog.title}</h3>
                <p>${blog.summary || ''}</p>
            </a>
        </div>
        `;
    });
    $('#list-blogs').html(html);
});

